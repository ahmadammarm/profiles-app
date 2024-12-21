import React from 'react'
import ProfileItem from './ProfileItem'

interface ProfileListProps {
    profiles: { id: number, nama: string; prodi: string; }[],
    onDelete: (id: number) => void

}

const ProfileList: React.FC<ProfileListProps> = ({
    profiles,
    onDelete
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4">
        {profiles.map((profile) => (
            <ProfileItem key={profile.id} {...profile} onDelete={onDelete} />
        ))}
    </div>
  )
}

export default ProfileList
