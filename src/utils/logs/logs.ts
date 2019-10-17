export const warnLog = function(message: string) {
  log(message, "background: #FFFF42; color: #000;");
};

function log(message: string, style: string) {
  console.log("%c " + message + " ", style);
}

export const errorLog = function(message: string) {
  log(message, "background: #DC5044; color: #000;")
};
