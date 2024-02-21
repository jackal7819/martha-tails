import axios from 'axios';

export const getMessages = async (token: string) => {
	const url = 'https://matys-dogs2.onrender.com/notification-admin';
	try {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: `Bearer ` + token,
			},
		});
		// console.log('Notification:', data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const updateMessageStatus = async (
	token: string,
	messageId: number,
	newStatus: boolean,
) => {
	const url = `https://matys-dogs2.onrender.com/notification-admin/${messageId}`;
	try {
		const { data } = await axios.put(
			url,
			{ status: newStatus },
			{
				headers: {
					Authorization: token,
				},
			},
		);
		return data;
	} catch (error) {
		console.error(error);
	}
};