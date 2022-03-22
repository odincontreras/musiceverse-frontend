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
		username: formInputs.current.username,
		email: formInputs.current.email,
		password: formInputs.current.password,
	};

	nprogress.start();

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/users/singin`,
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
