export const TAILS = 'https://matys-dogs2.onrender.com/dog_card';

//CHANGE FROM STRING TO NUMBER ID WHEN BACKEND WILL BE READY
export interface FormDogData {
	id?: string;
	name: string;
	name_en?: string;
	ready_for_adoption: boolean;
	gender: string;
	gender_en?: string;
	age: string;
	age_en?: string;
	sterilization?: boolean;
	vaccination_parasite_treatment?: boolean;
	size: string;
	size_en?: string;
	description: string;
	description_en?: string;
	photo?: File;
}

export const fetchTails = async (token: string) => {
	try {
		const response = await fetch(TAILS, {headers : {
				'Content-Type': 'multipart/form-data; boundary=--',
				Authorization: `Bearer ${token}`,
			} });

		if (!response.ok) {
			throw new Error('Data Tails loading error');
		}
		if (response.status === 200) {
			console.log(response);

		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};



export const setFormData = (formDogData: FormDogData) => {
	const newFormData = new FormData();

	Object.keys(formDogData).forEach(key => {
		const value = formDogData[key as keyof FormDogData];
		if (key === 'photo') {
			newFormData.append(key, value);
		} else if (value !== undefined) {
			newFormData.append(key, value.toString());
		}
		// newFormData.append(key, value.toString());
	});

	return newFormData;

};

export const addTail = async (addTailsInfo : {formDogData: FormDogData, token: string}) => {
	const {formDogData, token} = addTailsInfo;
	try {
		const response = await fetch(TAILS,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data; boundary=--',
					Authorization: `Bearer ${token}`,
				},
				body: setFormData(formDogData) as FormData,
			});

		if (!response.ok) {
			throw new Error('addTail error');
		}

		const data = await response.json();
		return data;

	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const deleteTail = async (deleteTail: {tailId: string, token: string}) => {
	const { tailId, token } = deleteTail;

	try {
		const response = await fetch(`${TAILS}/${tailId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'multipart/form-data; boundary=--',
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error('Delete request failed');
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('deleteTail Error:', error);
		throw error;
	}
};