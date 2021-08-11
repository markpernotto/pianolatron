import { rollProfile } from "./roll-config";

export const getKeyByValue = (object, value) => {
  Object.keys(object).find((key) => object[key] === value);
};

export const enforcePrecision = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

// Return a float between 0 and 1 proportional to value's position between min
// and max
export const normalizeInRange = (value, min, max) => {
  if (max - min === 0) return 0;
  return (value - min) / (max - min);
};

export const getHoleType = ({ m: midiNumber }, rollType) => {
  const {
    bassNotesBegin: notesBegin,
    trebleNotesEnd: notesEnd,
    ctrlMap,
  } = rollProfile[rollType];

  if (midiNumber >= notesBegin && midiNumber <= notesEnd) return "note";
  if (
    ctrlMap[midiNumber]?.includes("soft") ||
    ctrlMap[midiNumber]?.includes("sust")
  )
    return "pedal";
  return "control";
};

export const getHolePan = ({ m: midiNumber }, rollType) => {
  const holeType = getHoleType({ m: midiNumber }, rollType);
  if (holeType === "control") {
    if (
      midiNumber >= rollProfile[rollType].bassCtrlBegin &&
      midiNumber <= rollProfile[rollType].bassCtrlEnd
    )
      return "bass";
    if (
      midiNumber >= rollProfile[rollType].trebleCtrlBegin &&
      midiNumber <= rollProfile[rollType].trebleCtrlEnd
    )
      return "treble";
  } else if (holeType === "note") {
    if (
      midiNumber >= rollProfile[rollType].bassNotesBegin &&
      midiNumber <= rollProfile[rollType].bassNotesEnd
    )
      return "bass";
    if (
      midiNumber >= rollProfile[rollType].trebleNotesBegin &&
      midiNumber <= rollProfile[rollType].trebleNotesEnd
    )
      return "treble";
  }
  return null;
};

// Return a float between min and max proportional to value's position between
// 0 and 1
export const mapToRange = (value, min, max) => value * (max - min) + min;

export const getNoteName = (midiNumber) => {
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
};

export const getHoleLabel = (midiNumber, rollType = "welte-red") => {
  const {
    bassNotesBegin: notesBegin,
    trebleNotesEnd: notesEnd,
    ctrlMap,
  } = rollProfile[rollType];

  if (midiNumber >= notesBegin && midiNumber <= notesEnd)
    return getNoteName(midiNumber);

  if (ctrlMap && ctrlMap[midiNumber]) return ctrlMap[midiNumber];

  return `mid_${midiNumber}`;
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
