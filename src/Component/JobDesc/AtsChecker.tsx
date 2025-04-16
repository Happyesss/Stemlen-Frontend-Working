import { useState, useEffect } from "react";
import { Button, Loader, Progress, Card, FileInput, Title, Text, Modal } from "@mantine/core";
import { IconReportAnalytics } from "@tabler/icons-react";
import axios from "axios";
import { getJob } from "../../Services/JobService";
import { useTheme } from "../../ThemeContext";

const AtsChecker = ({ jobId }: { jobId: string }) => {
  const [jobDescription, setJobDescription] = useState<string>("");
  const [skillsRequired, setSkillsRequired] = useState<string[]>([]);
  const [resume, setResume] = useState<File | null>(null);
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [parsedAnalysis, setParsedAnalysis] = useState<any>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { isDarkMode } = useTheme();

  // Fetch Job Description
  useEffect(() => {

    if (jobId) {
      getJob(jobId)
        .then((job) => {
          setJobDescription(job?.description || "No description available");
          setSkillsRequired(job?.skillsRequired || []);
        })
        .catch((error) => console.error("Error fetching job description:", error));
    }
  }, [jobId]);

  // Handle Resume Upload
  const handleResumeUpload = (file: File | null) => {
    if (file) {
      setResume(file);
    } else {
      setResume(null);
    }
  };

  // Handle ATS Check
  const handleAtsCheck = async () => {
    if (!resume) {
      console.error("No resume uploaded!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", resume, resume.name);
    formData.append("job_description", jobDescription);
    formData.append("skills_required", JSON.stringify(skillsRequired));

    try {
      const response = await axios.post("https://ats-api-m949.onrender.com/analyze-resume", formData);

      if (response.data && response.data.analysis) {
        const parsedAnalysis = JSON.parse(response.data.analysis);
        setParsedAnalysis(parsedAnalysis);

        if (parsedAnalysis.overall_match_percentage) {
          const matchPercentage = parsedAnalysis.overall_match_percentage;
          const score = parseInt(matchPercentage.match(/\d+/)?.[0] || "0", 10);

          setAtsScore(score);
        } else {
          console.warn("ATS Score not found in parsed analysis:", parsedAnalysis);
        }
      } else {
        console.warn("Analysis key not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error checking ATS score:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card padding="lg" radius="md" className={`w-[92%] max-w-lg ${isDarkMode ? '!bg-cape-cod-900' : '!bg-white'}`}>
      <Title order={3} className="mb-3 text-blue-400">Stem-AI - Smart ATS Scanner</Title>
      <Text size="sm" className={`${isDarkMode ? '!text-cape-cod-200' : 'text-gray-700'}`}>
        Upload your resume and let <strong>Stem-AI</strong> analyze your compatibility with the job description using advanced AI algorithms.
      </Text>

      <img src={require(`../../assets/images/atsimg1.png`)} alt="" style={{ width: '100%', height: 'auto' }} />

      <FileInput
        placeholder="Upload your resume (PDF/DOC)"
        accept=".pdf,.doc,.docx"
        onChange={handleResumeUpload}
        className="mb-4 mt-3"
        styles={() => ({
          input: {
              backgroundColor:  isDarkMode ? "#2c3534" : "white",
              color: isDarkMode ? "white" : "black",
              borderColor: isDarkMode ? "#fff" : "black"
          }
      })}
      />

      <Button fullWidth onClick={handleAtsCheck} loading={loading}>
        {loading ? <Loader size="sm" color="white" /> : "Run AI Resume Check"}
      </Button>

      {atsScore !== null && (
        <div className="mt-5">
            <Text className={`font-semibold text-lg ${isDarkMode ? '!text-cape-cod-200' : 'text-cape-cod-700'}`}> Stem-AI Score: {atsScore}%</Text>
          <Progress value={atsScore || 0} color={atsScore > 60 ? "green" : "red"} size="md" mt="sm" />
        </div>
      )}

      {parsedAnalysis && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', cursor: 'pointer', color: 'lightseagreen' }} onClick={() => setModalOpened(true)}>
            <IconReportAnalytics size={24} />
            <Text style={{ marginLeft: '8px' }}>View AI Insights</Text>
          </div>
          <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="📑 Stem-AI Resume Analysis" size="lg">
            <div style={{ maxWidth: "100%" }}>
              <p><strong>✅ AI Match Score:</strong> {parsedAnalysis.overall_match_percentage}</p>
              <p><strong>🛠 Key Skills Identified:</strong><br />{parsedAnalysis.key_skills_match}</p>
              <p><strong>📜 Experience Alignment:</strong><br />{parsedAnalysis.experience_relevance}</p>
              <p><strong>🚀 Improvement Areas:</strong><br />{parsedAnalysis.missing_qualifications}</p>
              <p><strong>💡 AI Recommendations:</strong><br />{parsedAnalysis.suggestions_for_improvement}</p>
            </div>
          </Modal>
        </>
      )}
    </Card>
  );
};

export default AtsChecker;
