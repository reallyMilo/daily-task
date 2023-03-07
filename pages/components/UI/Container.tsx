type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = (props: ContainerProps) => {
  return (
    <section
      className={`max-auto rounded-xl p-7 bg-base-200 ${props.className}`}
    >
      {props.children}
    </section>
  );
};

export default Container;
