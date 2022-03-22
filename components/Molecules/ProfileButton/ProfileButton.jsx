import { Avatar } from "@chakra-ui/react";

const ProfileButton = ({ clickHandler, user }) => {
	return (
		<button onClick={clickHandler}>
			<Avatar
				size="sm"
				bg="#7a7a7a"
				src={
					user?.avatar &&
					`${process.env.NEXT_PUBLIC_API_URL}/avatars/${user.avatar}`
				}
			/>
		</button>
	);
};

export default ProfileButton;
