export default function MeditationScoreList() {
  const items = [
    { name: 'Breathing', time: '2.5h', percent: '20%', color: '#A7C17A' },
    { name: 'Mindfulness', time: '1.7h', percent: '17%', color: '#F2A341' },
    { name: 'Relax', time: '8h', percent: '40%', color: '#F8E07E' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-around gap-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#fff] rounded-2xl p-4 shadow-sm"
        >
          {/* Left side: circle + text */}
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <p className="text-[#4B3621] font-semibold">{item.name}</p>
          </div>

          {/* Right side: time and percent */}
          <div className="flex items-center gap-2">
            <p className="text-[#6B5B4A] text-sm font-semibold">{item.time}</p>
            <p className="text-[#4B3621] font-bold">{item.percent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
