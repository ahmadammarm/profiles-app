import React from 'react'

interface ProfileItemHeaderProps {
    nama: string,
}

const ProfileItemHeader: React.FC<ProfileItemHeaderProps> = ({
    nama
}) => {
  return (
    <div>
        <h1 className="text-lg font-bold text-center">
            {nama}
        </h1>
    </div>
  )
}

export default ProfileItemHeader
