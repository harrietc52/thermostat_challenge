require 'sinatra/base'

class Thermostat < Sinatra::Base

  set :public_folder, proc { File.join(root) }

  get '/' do
    File.read("Thermostat.html")
  end

end