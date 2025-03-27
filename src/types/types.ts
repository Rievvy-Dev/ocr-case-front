interface Pdf {
  id: string;
  filename: string;
  chat?: { id: string };
  onCreateNewChat: () => void;
}

interface HistoricProps {
  pdfs: Pdf[];
  onSelectChat: (chatId: string | null) => void; 
  onDeleteChat: (fileId: string) => void;
  onCreateNewChat: () => void;
  selectedChat: string | null;
}

interface UploadResponse {
  fileId: string;
  chatId: string;
}
