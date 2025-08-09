export const useToast = () => {
  const toast = (props) => {
    // For now, we'll just log to console, but you can expand this with a proper toast implementation
    console.log('Toast:', props);
  };

  return { toast };
};
