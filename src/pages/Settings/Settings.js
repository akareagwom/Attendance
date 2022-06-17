import SideBar from '../../sidebar/SideBar';
import './Settings.css'

const Settings = () => {
    return (  
        <div>
            <SideBar/>
            <div className="indivi">
             <div>
                 <input type="text" placeholder="Search" />
             </div>
             <h1>Settings</h1>
            </div>
            <div className='brain'>
                <button>Update User Profile</button><br />
                <button>Add Admin</button><br />
                <button>Admin Profile Update</button><br />
                <button>Change Theme</button>
            </div>
            <div className='onit'>
                <form action="" >
                    <div className='put'>
                    <input type="text" className='bank'/>
                    <input type="text" className='bank'/>
                    </div>
                    <div className='grace'>
                    <button >Update</button>
                    </div>
                    
                    <div className='hundred'>
                    <input type="text" className='bank'/>
                    <input type="text" className='bank'/>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Settings;