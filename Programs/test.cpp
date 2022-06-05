#include <bits/stdc++.h>
using namespace std;
#define ll long long
const int MAX_N = 1e5 + 1;
const ll MOD = 1e9 + 7;
const ll INF = 1e9;
int main() {
    ll t;
    cin>>t;
    while(t--)
    {
        ll n;
        cin>>n;
        ll arr[n];
        for(ll i=0;i<n;i++)
        {
            cin>>arr[i];
        }
        for(ll i=0;i<n-2;i++)
        {
            if(arr[i]>arr[i+1])
            {
                if(arr[i]+arr[i+2]>arr[i+1])
                {
                    swap(arr[i],arr[i+2]);
                }
            }
            
        }
        
        
        
        
        
    }
}