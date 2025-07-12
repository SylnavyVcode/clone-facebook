// src/api/conversation.api.ts
import { z } from 'zod';
import { getConversationsSchema, getConversationSchema } from '../../types/chat/chatForm';
import { api } from '../../libs/axios';

export const getConversations = async () => {
  const { data } = await api.get('/chat');
  return getConversationsSchema.parse(data);
};

export const getConversation = async (conversationId: string) => {
  try {
    const { data } = await api.get(`/chat/${conversationId}`);
    return getConversationSchema.parse(data);
  } catch (error) {
    console.error(error);
    // On ne peut pas rediriger ici directement. La redirection se gère dans le composant React.
    throw new Error('Conversation introuvable');
  }
};

export const sendMessage = async ({
  conversationId,
  content,
}: {
  conversationId: string;
  content: string;
}) => {
  const { data } = await api.post(`/chat/${conversationId}`, {
    content,
  });

  return feedbackSchema.parse(data);
};

export const conversationFeedbackSchema = feedbackSchema.extend({
  conversationId: z.string().optional().nullable(),
});

export const createConversation = async (recipientId: string) => {
  const { data } = await api.post('/chat', {
    recipientId,
  });

  const feedback = conversationFeedbackSchema.parse(data);

  if (feedback.error) {
    throw new Error(feedback.message);
  }

  // Retourner l’ID pour que le composant React redirige
  return feedback.conversationId;
};