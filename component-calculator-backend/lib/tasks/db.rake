# namespace :db do
#   desc "Kick out PostgreSQL users from the database."
#   task kick: [:environment] do
#     begin
#       ActiveRecord::Base.connection.execute <<-SQL
#       SELECT pg_terminate_backend(pg_stat_activity.pid)
#       FROM pg_stat_activity
#       WHERE pg_stat_activity.datname = '#{ActiveRecord::Base.connection.current_database}';
#     SQL
#     rescue ActiveRecord::StatementInvalid
#       puts "All connections killed."
#     end
#   end
# end

namespace :db do
  desc 'Force a db:reset of database'
  task hard_reset: :environment do
    if Rails.env.development?
      conn = ActiveRecord::Base.connection
      # Terminate all connections except our current one
      conn.execute("SELECT
                      pg_terminate_backend (pid)
                    FROM
                      pg_stat_activity
                    WHERE
                      pid <> pg_backend_pid ()
                    AND datname = 'converger_development';")
      # Close the connection behind us
      ActiveRecord::Base.connection.close
# Invoke a task now all connections are gone
      Rake::Task['db:reset'].invoke
      Rake::Task['db:migrate'].invoke
p "Forced a db:reset for environment #{Rails.env}"
    else
      p "Sorry I cannot db:reset db on this environment: #{Rails.env}"
    end
  end
end