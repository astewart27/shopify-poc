/* eslint-disable no-unused-vars  */
import { render, h } from 'preact';

/** @jsx h */

const PreactHeader = () => (
  <div>
    <p>This is some text written in Preact</p>
  </div>
);

export default function decorate(block) {
  console.log('Block', block);
  render(<PreactHeader />, document.body);
}
