export default function Word({
  message,
  name,
}: {
  message: string;
  name: string;
}) {
  return (
    <div className="text-center max-md:w-[100px] w-[391px] h-[210px]">
      <blockquote>{message}</blockquote>
      <p className="h-[25px]  font-bold text-center">{name}</p>
    </div>
  );
}
