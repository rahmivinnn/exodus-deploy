"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { MapPin, Download, Send, MessageSquare } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockHistoricalData = [
  { month: "Sep 2024", kma: 2750, similar: 2600 },
  { month: "Oct 2024", kma: 2680, similar: 2550 },
  { month: "Nov 2024", kma: 2720, similar: 2580 },
  { month: "Dec 2024", kma: 2800, similar: 2650 },
  { month: "Jan 2025", kma: 2650, similar: 2500 },
  { month: "Feb 2025", kma: 2700, similar: 2520 },
  { month: "Mar 2025", kma: 2750, similar: 2580 },
  { month: "Apr 2025", kma: 2800, similar: 2620 },
  { month: "May 2025", kma: 2850, similar: 2680 },
  { month: "Jun 2025", kma: 2900, similar: 2720 },
  { month: "Jul 2025", kma: 2950, similar: 2750 },
  { month: "Aug 2025", kma: 3000, similar: 2800 },
  { month: "Sep 2025", kma: 3050, similar: 2850 },
]

export function FreightRateCalculator() {
  const [equipment, setEquipment] = useState("Van")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [pickupTime, setPickupTime] = useState("08:00")
  const [hideEmpty, setHideEmpty] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rateData, setRateData] = useState(null)

  const calculateRate = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const baseRate = 2452 + Math.floor(Math.random() * 200 - 100)
    const confidence = 70 + Math.floor(Math.random() * 20)

    setRateData({
      marketRate: baseRate,
      confidence,
      minRate: Math.floor(baseRate * 0.8),
      maxRate: Math.floor(baseRate * 1.2),
      verifiedBuyRate: Math.floor(baseRate * 1.18),
      buyConfidence: 82,
      verifiedSellRate: Math.floor(baseRate * 1.36),
      markupPercent: 15,
      markupAmount: Math.floor(baseRate * 0.18),
      reports: { kma: 52, similar: 34 },
    })
    setLoading(false)
  }

  const downloadPDF = () => {
    // Mock PDF download
    const element = document.createElement("a")
    element.href = "data:text/plain;charset=utf-8,UK Freight Quote - Mock PDF Content"
    element.download = `freight-quote-${Date.now()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Form */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            <div>
              <Label htmlFor="equipment">Equipment Type</Label>
              <Select value={equipment} onValueChange={setEquipment}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Van">Van</SelectItem>
                  <SelectItem value="Reefer">Reefer</SelectItem>
                  <SelectItem value="Flatbed">Flatbed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="origin">Origin</Label>
              <Input
                id="origin"
                placeholder="e.g., London"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="e.g., Manchester M1 1AA"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="pickup-date">Pickup Date</Label>
              <Input id="pickup-date" type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="pickup-time">Pickup Time</Label>
              <Input id="pickup-time" type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
            </div>

            <Button
              onClick={calculateRate}
              disabled={loading || !origin || !destination}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {loading ? "Loading..." : "Get Rate"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Lane Data */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Lane Data</CardTitle>
              <div className="flex items-center space-x-2">
                <Label htmlFor="hide-empty">Hide empty widgets</Label>
                <Switch id="hide-empty" checked={hideEmpty} onCheckedChange={setHideEmpty} />
              </div>
            </CardHeader>
          </Card>

          {/* Market Rate Prediction */}
          {rateData && (
            <Card>
              <CardHeader>
                <CardTitle>Market Rate Prediction</CardTitle>
                <p className="text-sm text-gray-600">
                  Based on {rateData.reports.kma} KMA reports & {rateData.reports.similar} similar lane reports
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary">{rateData.confidence}% Confidence</Badge>
                  <span className="text-2xl font-bold">£{rateData.marketRate.toLocaleString()}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockHistoricalData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[1500, 4000]} />
                      <Tooltip formatter={(value) => [`£${value}`, ""]} />
                      <Line type="monotone" dataKey="kma" stroke="#f97316" strokeWidth={2} />
                      <Line type="monotone" dataKey="similar" stroke="#f97316" strokeDasharray="5 5" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline">Min £{rateData.minRate.toLocaleString()}</Badge>
                  <Badge>£{rateData.marketRate.toLocaleString()}</Badge>
                  <Badge variant="outline">Max £{rateData.maxRate.toLocaleString()}</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="feedback">Please give us feedback on the rate</Label>
                    <Textarea id="feedback" placeholder="Your feedback..." className="mt-2" />
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Rate is high
                    </Button>
                    <Button variant="outline" size="sm">
                      Rate is low
                    </Button>
                    <Button variant="outline" size="sm">
                      Rate is good
                    </Button>
                  </div>
                </div>

                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span>Verified Sell Rate: £{rateData.verifiedSellRate.toLocaleString()}</span>
                      <span>
                        Markup {rateData.markupPercent}% | £{rateData.markupAmount.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-yellow-800">
                    There is no historical data about the average markup for this lane
                  </p>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Quote
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request Bid
                  </Button>
                  <Button variant="outline" onClick={downloadPDF}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Proof
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {rateData && (
            <Card>
              <CardHeader>
                <CardTitle>Verified Buy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">£{rateData.verifiedBuyRate.toLocaleString()}</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Confidence</span>
                    <span>{rateData.buyConfidence}%</span>
                  </div>
                  <Progress value={rateData.buyConfidence} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Mock Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Route Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p>Interactive map will show here</p>
                  <p className="text-sm">
                    {origin} → {destination}
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                Larger Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
