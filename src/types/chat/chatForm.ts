import { z } from 'zod';

export const messagesSchema = z.array(
	z.object({
		id: z.string(),
		content: z.string(),
		sender: z.object({
			id: z.string(),
			firstname: z.string(),
		}),
	})
);

export const getConversationsSchema = z.array(
	z.object({
		id: z.string(),
		updatedAt: z.string(),
		users: z.array(
			z.object({
				id: z.string(),
				firstname: z.string(),
				profilePic: z.string().optional().nullable(),
			})
		),
		messages: z.array(
			z.object({
				id: z.string(),
				content: z.string(),
				sender: z.object({
					id: z.string(),
					firstname: z.string(),
				}),
			})
		),
	})
);

const donationSchema = z.object({
	amount: z.number().nullable(),
	createdAt: z.string(),
	id: z.string(),
});

export const getConversationSchema = z.object({
	id: z.string(),
	updatedAt: z.string(),
	messages: messagesSchema,
	users: z.array(
		z.object({
			id: z.string(),
			firstname: z.string(),
			profilePic: z.string().optional().nullable(),

			givenDonations: z.array(donationSchema),
			receivedDonations: z.array(donationSchema),
		})
	),
});
