export default function useConvertBase64() {
  return {
    async convertBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          resolve(e.target?.result as string);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };

        fileReader.readAsDataURL(file);
      });
    },
  };
}
