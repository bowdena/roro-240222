class StaticPagesController < ApplicationController
  def roro
  end
  def hotwire; end

  def submit
    render turbo_stream: turbo_stream.replace('result', partial: 'result')
  end
end
