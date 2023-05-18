export { calc_record, get_record }

function calc_record(score) {
  let record = get_record()
  if (score > record) {
    record = score
    save_record(score)
  }
  return record
}

function save_record(record) {
  localStorage.setItem("record", record)
}

function get_record() {
  let record
  record = localStorage.getItem("record")
  if (record === null) {
    record = 0
    save_record(record)
  }
  return record
}
