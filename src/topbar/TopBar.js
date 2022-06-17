import "./topbar.css"

const TopBar = () => {
    return (  
        <div>
            <div className="topbar">
                <div className="">
                    <input type="text" placeholder="Search for students, mentors..." />
                </div>
                <h1>Dashboard</h1>
                <div className="inform">
                    <div className="static">
                        <p>Interns</p>
                        <h2>62</h2>
                    </div>
                    <div className="static">
                        <p>Private Students</p>
                        <h2>62</h2>
                    </div>
                    <div className="static">
                        <p>Mentors</p>
                        <h2>62</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;