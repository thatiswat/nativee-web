interface Props {
  title: string;
  text: string;
}

export default function ConversationBubble({
  title,
  text
}: Props) {

  return (
    <div className="border border-zinc-200 rounded-3xl p-5">

      <p className="text-xs uppercase text-zinc-400">
        {title}
      </p>

      <p className="mt-3 text-xl">
        {text}
      </p>

    </div>
  );
}