export const downloadResume = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Google Drive direct download link
      const resumeUrl = 'https://drive.google.com/uc?export=download&id=1EpXrXdF0BS4eBmLhbn5wUXQLRtIa39Ih';
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'MD_Naymul_Islam_Resume.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Resolve after a short delay to simulate download initiation
      setTimeout(() => {
        resolve();
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
};