export const enforcePrecision = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const WELTE_RED_FIRST_NOTE = 24;
const WELTE_RED_LAST_NOTE = 103;

export const getNoteName = (midiNumber) => {
  if (midiNumber >= WELTE_RED_FIRST_NOTE && midiNumber <= WELTE_RED_LAST_NOTE) {
    const octave = parseInt(midiNumber / 12, 10) - 1;
    const name = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
    ][(midiNumber - 21) % 12];
    return `${name}${octave}`;
  }
  return null;
};

export const easingInterval = (
  fn,
  startInterval = 200,
  endInterval = 5,
  divisor = 1.1,
) => {
  let timeoutId;
  let interval = startInterval;
  const wrapped = () => {
    fn();
    interval = Math.max(Math.floor(interval / divisor), endInterval);
    timeoutId = setTimeout(wrapped, interval);
  };

  timeoutId = setTimeout(wrapped, interval);

  return {
    clear: () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    },
  };
};
