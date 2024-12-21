import { getData } from '@/data/data'
import ProfileList from './ProfileList'


const ProfileApp = () => {

    const profiles = getData()

  return (
    <div>
        <h1 className="text-center mt-5 font-bold text-xl">
            Daftar Mahasiswa
        </h1>
        <div>
            <ProfileList profiles={profiles} />
        </div>
    </div>
  )
}

export default ProfileApp
