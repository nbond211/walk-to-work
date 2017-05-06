import moment from 'moment';

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5]);
}

export function formatDateTime(dateString) {
    const date = parseDate(dateString);
    return moment(date).format('M.D.YY, h:mm a');
}

export function formatDateTimeForTile(dateString) {
    const date = parseDate(dateString);
    return moment(date).format('M.D.YY');
}