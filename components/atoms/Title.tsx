interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => (
  <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
    {text}
  </h1>
);

export default Title;
