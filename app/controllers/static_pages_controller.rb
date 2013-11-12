class StaticPagesController < ApplicationController
  layout "project", except: [:home]

  def home
  end

  def hope_fit
  end

  def resume
  	pdf_filename = File.join(Rails.root, "app/assets/resume.pdf")
  	send_file(pdf_filename, filename: "resume.pdf", disposition: "inline", type: "application/pdf" )
  end
end
