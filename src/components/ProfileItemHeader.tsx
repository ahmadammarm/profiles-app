import React from 'react'

interface ProfileItemHeaderProps {
    nama: string,
    nim: string
}

const ProfileItemHeader: React.FC<ProfileItemHeaderProps> = ({
    nama,
    nim
}) => {
  return (
    <div>
        <h1 className="text-lg font-bold text-center">
            {nama}
        </h1>
        <p className="text-gray-600 italic text-md mb-10 text-center">
            {nim}
        </p>
    </div>
  )
}

export default ProfileItemHeader
