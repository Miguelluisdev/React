import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://cdn.discordapp.com/attachments/1148438951414222899/1176646537556807842/download_3.jpg?ex=656fa07b&is=655d2b7b&hm=412262f0dbbf197e145e5da755a4c8183d32f9fdb704e22787e948757bc34662&"
        name="GRim"
        bio="Full-stack javascript developer at Acme Inc."
        email="miguel@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}