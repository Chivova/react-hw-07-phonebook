const style = {
  container: {
    maxWidth: 1440,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export default function Container({ children }) {
  return <div style={style.container}>{children}</div>;
}
