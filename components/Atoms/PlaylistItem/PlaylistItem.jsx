import styles from "./PlaylistItem.module.scss";
import Image from "next/image";

const PlaylistItem = ({ cover, name }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<Image
					src={
						cover === "general_cover.jpg"
							? `${process.env.NEXT_PUBLIC_API_URL}/${cover}`
							: `${process.env.NEXT_PUBLIC_API_URL}/playlistsCovers/${cover}`
					}
					alt="Playlist cover"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<p className="body c-white text-center xxs-mt-5">{name}</p>
		</div>
	);
};

export default PlaylistItem;
