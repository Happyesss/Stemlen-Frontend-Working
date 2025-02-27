const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short'
    };
  
    return date.toLocaleString('en-US', options);
  };

  function timeAgo(time:string){
    const now= new Date();
    const postDate = new Date(time);
    const diff = now.getTime()-postDate.getTime();

    const seconds = Math.floor(diff/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    const weeks = Math.floor(days/7);
    const months = Math.floor(weeks/4);
    const years = Math.floor(months/12);

    if(seconds<60){
        return `${seconds} seconds ago`;
    }else if(minutes<60){
        return `${minutes} minutes ago`;
    }else if(hours<24){
        return `${hours} hours ago`;
    }else if(days<7){
        return `${days} days ago`;
    }else if(weeks<4){
        return `${weeks} weeks ago`;
    }else if(months<12){
        return `${months} months ago`;
    }else{
        return `${years} years ago`;
    }
  }
  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const  foramtInterviewTime = (dateStr:any) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
       month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true
    });
  }

  function openBase64(base64String: string) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  }

  const calculateDaysLeft = (eventDate: string): number => {
    const currentDate = new Date();
    const event = new Date(eventDate);

    // Reset time to midnight to compare only dates
    currentDate.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);

    const diffTime = event.getTime() - currentDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24); 

    console.log("Diff Days:", diffDays);
    return diffDays;
};


  const deleteHackathon = async (hackathonId: string) => {
    try {
      const response = await fetch(`/api/hackathons/${hackathonId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete hackathon');
      }
      console.log(`Hackathon with ID ${hackathonId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting hackathon:', error);
    }
  };

  export { formatDate , timeAgo , getBase64 , foramtInterviewTime, openBase64, calculateDaysLeft, deleteHackathon };
