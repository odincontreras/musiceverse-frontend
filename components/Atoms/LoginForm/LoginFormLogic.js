import nprogress from "nprogress";

export const changeHandler = (e, formInputs) => {
	formInputs.current = {
		...formInputs.current,
		[e.target.name]: e.target.value,
	};
};

export const submitHandler = async (
	e,
	formInputs,
	dispatch,
	setUser,
	router,
	toast
) => {
	e.preventDefault();

	const bodyData = {
		email: formInputs.current.email,
		password: formInputs.current.password,
	};

	nprogress.start();

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/users/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyData),
		}
	);

	const data = await response.json();

	nprogress.done();

	if (response.ok) {
		// console.log(data);
		localStorage.setItem("musicverse_jwt", data.token);
		dispatch(setUser(data.user));
		return router.push("/");
	}

	return toast({
		title: data.message || "Login failed, please try again!",
		status: "error",
		position: "top-right",
		isClosable: true,
	});
};
