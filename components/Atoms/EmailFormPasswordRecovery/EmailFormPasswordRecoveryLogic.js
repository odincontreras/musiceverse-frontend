import nprogress from "nprogress";

export const changeHandler = (e, formInputs) => {
	formInputs.current = {
		...formInputs.current,
		[e.target.name]: e.target.value,
	};
};

export const submitHandler = async (e, formInputs, toast, setUserEmail) => {
	e.preventDefault();

	const bodyData = {
		email: formInputs.current.email,
	};

	nprogress.start();

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/users/send-password-recovery-token`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyData),
		}
	);

	const data = await response.json();

	// console.log(response);
	nprogress.done();

	if (response.ok) {
		return setUserEmail(bodyData.email);
	}

	return toast({
		title: data.message || "Error creating user!",
		status: "error",
		position: "top-right",
		isClosable: true,
	});
};
