type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Grid = (props: ContainerProps) => {
  return (
    <section
      className={`grid gap-10 ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Grid;
