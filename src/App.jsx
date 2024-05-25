export default function App() {
  const data = {
    name: "Salim Hidayat",
    born: "24 Februari 2002",
    age: 22,
    profileImage: "./profile.png",
    hobbies: ["Membaca", "Menonton Film", "Nyanyi",],
  };

  return (
    <>
      <main>
        <div className="card">
          <div className="card-title">
            <h1>This is Nebula Task 1</h1>
          </div>
          <div className="card-body">
            <h3>BIODATA</h3>
            <div className="bio-profile-pic">
              <img src={data.profileImage} alt="" />
            </div>
            <h4 className="bio-name">{data.name}</h4>
            <div className="bio-date">{data.born}</div>
            <div className="bio-age">{data.age} Tahun</div>
            <div className="bio-hobbies">
              {data.hobbies.map((hobby, index) => (
                <button key={index} className="hobby">{hobby}</button>
              ))}
            </div>
            <div className="card-footer">
              &copy; {new Date().getFullYear()} - Salim Hidayat
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
