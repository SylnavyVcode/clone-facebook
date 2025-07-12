// src/pages/ConversationPage.tsx
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getConversations, createConversation } from '../../services/conversation/conversation.api';

type Conversation = {
  id: string;
  title: string;
};

export default function ConversationPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getConversations()
      .then(setConversations)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async () => {
    try {
      const newConvId = await createConversation('recipient-id-xyz');
      navigate(`/conversations/${newConvId}`);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Conversations</h1>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul className="space-y-2">
          {conversations.map((conv) => (
            <li
              key={conv.id}
              className="border rounded p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate(`/conversations/${conv.id}`)}
            >
              {conv.title}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleCreate}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Créer une conversation
      </button>
    </div>
  );
}
