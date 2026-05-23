import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const stats = [
  { label: "Trophies", value: "5" },
  { label: "Win Rate", value: "62%" },
  { label: "Home Ground", value: "Wankhede" },
  { label: "Season Rank", value: "#2" },
];

const upcomingMatches = [
  {
    opponent: "Chennai Super Kings",
    date: "May 30, 2026",
    venue: "Wankhede Stadium",
    time: "7:30 PM IST",
  },
  {
    opponent: "Royal Challengers Bengaluru",
    date: "Jun 2, 2026",
    venue: "M. Chinnaswamy Stadium",
    time: "7:30 PM IST",
  },
  {
    opponent: "Kolkata Knight Riders",
    date: "Jun 6, 2026",
    venue: "Eden Gardens",
    time: "3:30 PM IST",
  },
];

const topPlayers = [
  { name: "Rohit Sharma", role: "Batter", stat: "Runs: 640", badge: "Captain" },
  { name: "Jasprit Bumrah", role: "Bowler", stat: "Wickets: 24", badge: "Pacer" },
  { name: "Suryakumar Yadav", role: "Batter", stat: "SR: 168.4", badge: "Finisher" },
  { name: "Tilak Varma", role: "All-rounder", stat: "MOM: 5", badge: "Rising" },
];

const news = [
  {
    title: "MI unveil new training analytics hub at Powai",
    tag: "Club",
  },
  {
    title: "Mumbai add spin depth ahead of mid-season surge",
    tag: "Squad",
  },
  {
    title: "Wankhede crowd powers MI to back-to-back wins",
    tag: "Matchday",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-blue-950">
            MI
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300">
              Cricket Club
            </p>
            <p className="text-xl font-semibold">MI Cricket</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          {["Matches", "Squad", "News", "Fan Zone"].map((item) => (
            <button
              key={item}
              type="button"
              className="transition hover:text-white"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
          >
            Log in
          </Button>
          <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">
            Buy Tickets
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <Badge className="border border-yellow-300/30 bg-yellow-400/15 text-yellow-200">
              IPL 2026 Fan Hub
            </Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Mumbai Indians matchday HQ with scores, squad, and stories.
            </h1>
            <p className="text-base text-white/75 md:text-lg">
              Track upcoming fixtures, catch the latest highlights, and stay
              connected with the MI community. Everything you need in one clean
              cricket dashboard.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">
                Get match alerts
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Watch highlights
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Live: MI vs RCB · 142/3 (15.1)
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                Next home game: May 30
              </div>
            </div>
          </div>

          <Card className="border border-white/20 bg-white/10 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg">
                Live Center
                <Badge className="bg-emerald-400/20 text-emerald-200">
                  In Play
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-white/80">
              <div className="space-y-2">
                <p className="text-3xl font-semibold text-white">142/3</p>
                <p>Overs: 15.1 · Target: 188</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">
                <p className="text-white">S. Yadav 42 (27)</p>
                <p className="text-white/70">Rohit 51 (36)</p>
              </div>
              <Button className="w-full bg-white text-blue-950 hover:bg-white/90">
                Open match center
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border border-white/15 bg-white/5 text-white"
            >
              <CardHeader>
                <CardTitle className="text-sm text-white/70">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border border-white/15 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>Upcoming matches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMatches.map((match) => (
                <div
                  key={match.opponent}
                  className="flex flex-col gap-1 rounded-lg border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-base font-semibold text-white">
                      vs {match.opponent}
                    </p>
                    <p className="text-sm text-white/70">
                      {match.date} · {match.venue}
                    </p>
                  </div>
                  <Badge className="w-fit bg-white/15 text-white/80">
                    {match.time}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-white/15 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>Squad highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topPlayers.map((player) => (
                <div
                  key={player.name}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="font-semibold text-white">{player.name}</p>
                    <p className="text-sm text-white/70">
                      {player.role} · {player.stat}
                    </p>
                  </div>
                  <Badge className="bg-yellow-400/20 text-yellow-200">
                    {player.badge}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border border-white/15 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>Latest news</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {news.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">5 hours ago · MI Hub</p>
                  </div>
                  <Badge className="bg-white/15 text-white/80">
                    {item.tag}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-white/15 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>Fan zone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-white/70">
                Get exclusive MI updates, ticket drops, and behind-the-scenes
                content every week.
              </p>
              <div className="space-y-3">
                <Input
                  placeholder="Enter your email"
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-yellow-400 text-blue-950 hover:bg-yellow-300">
                  Join the fan club
                </Button>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <p>✅ Priority match alerts</p>
                <p>✅ Player stories & training insights</p>
                <p>✅ Exclusive merchandise drops</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
