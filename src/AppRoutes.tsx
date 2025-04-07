import HomePage from './Component/Pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Findjobs from './Component/Pages/Findjobs';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import FindTalent from './Component/Pages/FindTalent';
import TalentProfile from './Component/Pages/TalentProfile';
import PostPage from './Component/Pages/PostPage';
import JobDescription from './Component/Pages/JobDescription';
import ApplyJob from './Component/Pages/ApplyJob';
import CompanyPage from './Component/Pages/CompanyPage';
import PostedJob from './Component/Pages/PostedJob';
import SignUpPage from './Component/Pages/SignUpPage';
import ProfilePage from './Component/Pages/ProfilePage';
import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';
import JobGalleryPage from './Component/Pages/JobGalleryPage';
import ProtectedRoute from './Services/ProtectedRoute';
import PublicRoute from './Services/PublicRoute';
import HackathonPage from './Component/Pages/HackathonPage';
import HackathonDescription from './Component/Pages/HackathonDescription';
import PostHackathonPage from './Component/Pages/PostHackathonPage';
import OAuthCallback from './Services/OAuthCallback';
import VerifyEmail from './Component/SignUp/VerifyEmail';
import TermsService from './Component/SignUp/TermsService';
import PrivacyPolicy from './Component/SignUp/PrivacyPolicy';
import AboutPage from './Component/Pages/AboutPage';

const AppRoutes = () => {
    const user=useSelector((state:any)=>state.user)
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about-us" element={<AboutPage/>} />
        <Route path='/terms-of-service' element={<TermsService />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/find-jobs' element={<Findjobs />} />
        <Route path='/jobs/:id' element={<JobDescription />} />
        <Route path='/apply-job/:id' element={user ? <ApplyJob /> : <Navigate to="/login" replace />} />
        <Route path='/find-hackathon' element={<HackathonPage />} />
        <Route path='/hackathon/:id' element={<HackathonDescription />} />
        <Route path='/posted-job/:id' element={<ProtectedRoute allowedRoles={['COMPANY']}><PostedJob/></ProtectedRoute>} />
        <Route path='/job-gallery' element={user ? <JobGalleryPage /> : <Navigate to="/login" replace />} />
        <Route path='/find-talent' element={<FindTalent />} />
        <Route path='/company/:name' element={<CompanyPage />} />
        <Route path='/talent-profile/:id' element={<TalentProfile />} />
        <Route path='/post-job/:id' element={<ProtectedRoute allowedRoles={['COMPANY']}><PostPage/></ProtectedRoute>} />
        <Route path='/post-hackathon' element={<ProtectedRoute allowedRoles={['COMPANY']}><PostHackathonPage/></ProtectedRoute>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path="/signup" element={<PublicRoute restricted={true}><SignUpPage /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute restricted={true}><SignUpPage /></PublicRoute>} />
        <Route path='/oauth2/redirect' element={<OAuthCallback />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Divider mx="md" size="xs"/>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes