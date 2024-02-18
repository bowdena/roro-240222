require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get roro" do
    get static_pages_roro_url
    assert_response :success
  end
end
