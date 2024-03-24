const Button = (props: { title: string }) => {
  return (
    <button className="bg-white px-4 py-2 rounded-md text-[#0D2E59] text-sm font-semibold">
      {props.title}
    </button>
  );
};

export default Button;
