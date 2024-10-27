export default function UserProfileCard({ name, profileImage, backgroundImage }) {
    return (
        <div className="relative">
            <img src={backgroundImage} alt="Background" className="w-full h-32 object-cover rounded-lg" />
            <div className="absolute top-12 left-6 flex items-center">
                <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full border-4 border-white" />
                <div className="ml-4 text-white font-bold text-xl bg-green-600 rounded-full px-4 py-2">{name}</div>
            </div>
        </div>
    );
}
