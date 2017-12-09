driver = {}

def update_driver_with_key_and_value(driver, key, value)
  new_obj = {"#{key}": value}
  driver.merge(new_obj)
end

def destructively_update_driver_with_key_and_value(driver, key, value)
  driver["#{key}"] = value
  driver
end

def delete_from_driver_by_key(driver, key)
  copy = driver.clone
  copy.delete(:"#{key}")
  copy
end

def destructively_delete_from_driver_by_key(driver, key)
  driver.delete(key)
  driver
end

destructively_delete_from_driver_by_key(driver, :address)
