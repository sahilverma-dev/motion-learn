import {
  Drag,
  DragConstraints,
  EnterAnimation,
  ExitAnimation,
  Gestures,
  HTMLContent,
  Keyframes,
  MotionPath,
  MotionValueAnimation,
  Reordering,
  ScrollProgress,
  SharedLayoutAnimation,
  StateAnimations,
} from "./components/animated";

const Home = () => {
  return (
    <div className="flex items-center flex-col gap-4 p-4 max-w-md mx-auto">
      <StateAnimations />
      <EnterAnimation />
      <ExitAnimation />
      <Drag />
      <DragConstraints />
      <Gestures />
      <HTMLContent />
      <Keyframes />
      <MotionPath />
      <ScrollProgress />
      <Reordering />
      <SharedLayoutAnimation />
      <MotionValueAnimation />
    </div>
  );
};

export default Home;
