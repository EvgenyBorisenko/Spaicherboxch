export const Type = {
  OPEN_POP_UP: 'OPEN_POP_UP',
  CLOSE_POP_UP: 'CLOSE_POP_UP',
};

export const openPopUp = () => ({
  type: Type.OPEN_POP_UP,
});

export const closePopUp = () => ({
  type: Type.CLOSE_POP_UP,
});
