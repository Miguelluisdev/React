/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>Name: </span>
        {props.name}
        <button>Follow</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
				<div className={styles.links}>
	        <a href={props.githubUrl} target="_blank">GitHub</a>
	        <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
	        <a href={props.twitterUrl} target="_blank">Twitter</a>
				</div>
      </ProfileSection>
    </div>
  )
}
