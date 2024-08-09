import { render, h } from 'preact';

/** @jsx h */

const PreactHeader = () => {
  return (
    <div>
      <p>This is some text written in Preact</p>
    </div>
  );
};

export default function decorate(block) {
  console.log('Block', block);
  render(<PreactHeader />, document.body);
}