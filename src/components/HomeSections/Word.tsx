export default function Word({
  message,
  name,
}: {
  message: string;
  name: string;
}) {
  return (
    <div className="text-center w-[391px] h-[210px]">
      <blockquote>{message}</blockquote>
      <p className="h-[25px] w-1/1 font-bold text-center">{name}</p>
    </div>
  );
}
