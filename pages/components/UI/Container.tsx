type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = (props: ContainerProps) => {
  return (
    <section
      className={`max-auto rounded-3xl p-7 bg-base-200 ${props.className}`}
    >
      {props.children}
    </section>
  );
};

export default Container;
